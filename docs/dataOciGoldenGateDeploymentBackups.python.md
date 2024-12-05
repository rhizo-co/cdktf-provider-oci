# `dataOciGoldenGateDeploymentBackups` Submodule <a name="`dataOciGoldenGateDeploymentBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentBackups <a name="DataOciGoldenGateDeploymentBackups" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups oci_golden_gate_deployment_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  deployment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#filter DataOciGoldenGateDeploymentBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]

---

##### `reset_deployment_id` <a name="reset_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentBackups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDeploymentBackups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDeploymentBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentBackupCollection">deployment_backup_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList">DataOciGoldenGateDeploymentBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deployment_backup_collection`<sup>Required</sup> <a name="deployment_backup_collection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentBackupCollection"></a>

```python
deployment_backup_collection: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filter"></a>

```python
filter: DataOciGoldenGateDeploymentBackupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList">DataOciGoldenGateDeploymentBackupsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentBackupsConfig <a name="DataOciGoldenGateDeploymentBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  deployment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#filter DataOciGoldenGateDeploymentBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}.

---

### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection()
```


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems()
```


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks()
```


### DataOciGoldenGateDeploymentBackupsFilter <a name="DataOciGoldenGateDeploymentBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#name DataOciGoldenGateDeploymentBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#values DataOciGoldenGateDeploymentBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#regex DataOciGoldenGateDeploymentBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#name DataOciGoldenGateDeploymentBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#values DataOciGoldenGateDeploymentBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#regex DataOciGoldenGateDeploymentBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks</a>

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isAutomatic">is_automatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isMetadataOnly">is_metadata_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeBackupFinished">time_backup_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatic`<sup>Required</sup> <a name="is_automatic" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isAutomatic"></a>

```python
is_automatic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_metadata_only`<sup>Required</sup> <a name="is_metadata_only" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isMetadataOnly"></a>

```python
is_metadata_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_backup_finished`<sup>Required</sup> <a name="time_backup_finished" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeBackupFinished"></a>

```python
time_backup_finished: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems</a>

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.items"></a>

```python
items: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection</a>

---


### DataOciGoldenGateDeploymentBackupsFilterList <a name="DataOciGoldenGateDeploymentBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]]

---


### DataOciGoldenGateDeploymentBackupsFilterOutputReference <a name="DataOciGoldenGateDeploymentBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_backups

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGoldenGateDeploymentBackupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>]

---



