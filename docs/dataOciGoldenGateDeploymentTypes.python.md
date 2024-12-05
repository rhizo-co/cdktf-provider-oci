# `dataOciGoldenGateDeploymentTypes` Submodule <a name="`dataOciGoldenGateDeploymentTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentTypes <a name="DataOciGoldenGateDeploymentTypes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types oci_golden_gate_deployment_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes(
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
  deployment_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]] = None,
  id: str = None,
  ogg_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#compartment_id DataOciGoldenGateDeploymentTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#deployment_type DataOciGoldenGateDeploymentTypes#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#display_name DataOciGoldenGateDeploymentTypes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#id DataOciGoldenGateDeploymentTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.oggVersion">ogg_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#ogg_version DataOciGoldenGateDeploymentTypes#ogg_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#compartment_id DataOciGoldenGateDeploymentTypes#compartment_id}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.deploymentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#deployment_type DataOciGoldenGateDeploymentTypes#deployment_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#display_name DataOciGoldenGateDeploymentTypes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#filter DataOciGoldenGateDeploymentTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#id DataOciGoldenGateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.Initializer.parameter.oggVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#ogg_version DataOciGoldenGateDeploymentTypes#ogg_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetOggVersion">reset_ogg_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]

---

##### `reset_deployment_type` <a name="reset_deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ogg_version` <a name="reset_ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.resetOggVersion"></a>

```python
def reset_ogg_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDeploymentTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDeploymentTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentTypeCollection">deployment_type_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList">DataOciGoldenGateDeploymentTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.oggVersionInput">ogg_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deployment_type_collection`<sup>Required</sup> <a name="deployment_type_collection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentTypeCollection"></a>

```python
deployment_type_collection: DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.filter"></a>

```python
filter: DataOciGoldenGateDeploymentTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList">DataOciGoldenGateDeploymentTypesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ogg_version_input`<sup>Optional</sup> <a name="ogg_version_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.oggVersionInput"></a>

```python
ogg_version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentTypesConfig <a name="DataOciGoldenGateDeploymentTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  deployment_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]] = None,
  id: str = None,
  ogg_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#compartment_id DataOciGoldenGateDeploymentTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#deployment_type DataOciGoldenGateDeploymentTypes#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#display_name DataOciGoldenGateDeploymentTypes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#id DataOciGoldenGateDeploymentTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.oggVersion">ogg_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#ogg_version DataOciGoldenGateDeploymentTypes#ogg_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#compartment_id DataOciGoldenGateDeploymentTypes#compartment_id}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#deployment_type DataOciGoldenGateDeploymentTypes#deployment_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#display_name DataOciGoldenGateDeploymentTypes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#filter DataOciGoldenGateDeploymentTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#id DataOciGoldenGateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesConfig.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#ogg_version DataOciGoldenGateDeploymentTypes#ogg_version}.

---

### DataOciGoldenGateDeploymentTypesDeploymentTypeCollection <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollection()
```


### DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems()
```


### DataOciGoldenGateDeploymentTypesFilter <a name="DataOciGoldenGateDeploymentTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#name DataOciGoldenGateDeploymentTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#values DataOciGoldenGateDeploymentTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#regex DataOciGoldenGateDeploymentTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#name DataOciGoldenGateDeploymentTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#values DataOciGoldenGateDeploymentTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_types#regex DataOciGoldenGateDeploymentTypes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.connectionTypes">connection_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.defaultUsername">default_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.sourceTechnologies">source_technologies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.supportedTechnologiesUrl">supported_technologies_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.targetTechnologies">target_technologies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `connection_types`<sup>Required</sup> <a name="connection_types" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.connectionTypes"></a>

```python
connection_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_username`<sup>Required</sup> <a name="default_username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.defaultUsername"></a>

```python
default_username: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `source_technologies`<sup>Required</sup> <a name="source_technologies" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.sourceTechnologies"></a>

```python
source_technologies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_technologies_url`<sup>Required</sup> <a name="supported_technologies_url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.supportedTechnologiesUrl"></a>

```python
supported_technologies_url: str
```

- *Type:* str

---

##### `target_technologies`<sup>Required</sup> <a name="target_technologies" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.targetTechnologies"></a>

```python
target_technologies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItems</a>

---


### DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference <a name="DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollection">DataOciGoldenGateDeploymentTypesDeploymentTypeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.items"></a>

```python
items: DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList">DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentTypesDeploymentTypeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesDeploymentTypeCollection">DataOciGoldenGateDeploymentTypesDeploymentTypeCollection</a>

---


### DataOciGoldenGateDeploymentTypesFilterList <a name="DataOciGoldenGateDeploymentTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]]

---


### DataOciGoldenGateDeploymentTypesFilterOutputReference <a name="DataOciGoldenGateDeploymentTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_types

dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGoldenGateDeploymentTypesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentTypes.DataOciGoldenGateDeploymentTypesFilter">DataOciGoldenGateDeploymentTypesFilter</a>]

---



