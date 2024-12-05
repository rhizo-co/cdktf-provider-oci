# `dataOciGoldenGateDeploymentCertificates` Submodule <a name="`dataOciGoldenGateDeploymentCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentCertificates <a name="DataOciGoldenGateDeploymentCertificates" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates oci_golden_gate_deployment_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#deployment_id DataOciGoldenGateDeploymentCertificates#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#id DataOciGoldenGateDeploymentCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#state DataOciGoldenGateDeploymentCertificates#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#deployment_id DataOciGoldenGateDeploymentCertificates#deployment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#filter DataOciGoldenGateDeploymentCertificates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#id DataOciGoldenGateDeploymentCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#state DataOciGoldenGateDeploymentCertificates#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDeploymentCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDeploymentCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.certificateCollection">certificate_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList">DataOciGoldenGateDeploymentCertificatesCertificateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList">DataOciGoldenGateDeploymentCertificatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_collection`<sup>Required</sup> <a name="certificate_collection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.certificateCollection"></a>

```python
certificate_collection: DataOciGoldenGateDeploymentCertificatesCertificateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList">DataOciGoldenGateDeploymentCertificatesCertificateCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.filter"></a>

```python
filter: DataOciGoldenGateDeploymentCertificatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList">DataOciGoldenGateDeploymentCertificatesFilterList</a>

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentCertificatesCertificateCollection <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollection()
```


### DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems()
```


### DataOciGoldenGateDeploymentCertificatesConfig <a name="DataOciGoldenGateDeploymentCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#deployment_id DataOciGoldenGateDeploymentCertificates#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#id DataOciGoldenGateDeploymentCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#state DataOciGoldenGateDeploymentCertificates#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#deployment_id DataOciGoldenGateDeploymentCertificates#deployment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#filter DataOciGoldenGateDeploymentCertificates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#id DataOciGoldenGateDeploymentCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#state DataOciGoldenGateDeploymentCertificates#state}.

---

### DataOciGoldenGateDeploymentCertificatesFilter <a name="DataOciGoldenGateDeploymentCertificatesFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#name DataOciGoldenGateDeploymentCertificates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#values DataOciGoldenGateDeploymentCertificates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#regex DataOciGoldenGateDeploymentCertificates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#name DataOciGoldenGateDeploymentCertificates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#values DataOciGoldenGateDeploymentCertificates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificates#regex DataOciGoldenGateDeploymentCertificates#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.authorityKeyId">authority_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.certificateContent">certificate_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isCa">is_ca</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isSelfSigned">is_self_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.md5Hash">md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKeyAlgorithm">public_key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKeySize">public_key_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.serial">serial</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.sha1Hash">sha1_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.subjectKeyId">subject_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeValidFrom">time_valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeValidTo">time_valid_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems">DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authority_key_id`<sup>Required</sup> <a name="authority_key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.authorityKeyId"></a>

```python
authority_key_id: str
```

- *Type:* str

---

##### `certificate_content`<sup>Required</sup> <a name="certificate_content" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.certificateContent"></a>

```python
certificate_content: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `is_ca`<sup>Required</sup> <a name="is_ca" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isCa"></a>

```python
is_ca: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_self_signed`<sup>Required</sup> <a name="is_self_signed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.isSelfSigned"></a>

```python
is_self_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `md5_hash`<sup>Required</sup> <a name="md5_hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.md5Hash"></a>

```python
md5_hash: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `public_key_algorithm`<sup>Required</sup> <a name="public_key_algorithm" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKeyAlgorithm"></a>

```python
public_key_algorithm: str
```

- *Type:* str

---

##### `public_key_size`<sup>Required</sup> <a name="public_key_size" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.publicKeySize"></a>

```python
public_key_size: str
```

- *Type:* str

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.serial"></a>

```python
serial: str
```

- *Type:* str

---

##### `sha1_hash`<sup>Required</sup> <a name="sha1_hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.sha1Hash"></a>

```python
sha1_hash: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_key_id`<sup>Required</sup> <a name="subject_key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.subjectKeyId"></a>

```python
subject_key_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_valid_from`<sup>Required</sup> <a name="time_valid_from" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeValidFrom"></a>

```python
time_valid_from: str
```

- *Type:* str

---

##### `time_valid_to`<sup>Required</sup> <a name="time_valid_to" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.timeValidTo"></a>

```python
time_valid_to: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems">DataOciGoldenGateDeploymentCertificatesCertificateCollectionItems</a>

---


### DataOciGoldenGateDeploymentCertificatesCertificateCollectionList <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference <a name="DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList">DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollection">DataOciGoldenGateDeploymentCertificatesCertificateCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.items"></a>

```python
items: DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList">DataOciGoldenGateDeploymentCertificatesCertificateCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentCertificatesCertificateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesCertificateCollection">DataOciGoldenGateDeploymentCertificatesCertificateCollection</a>

---


### DataOciGoldenGateDeploymentCertificatesFilterList <a name="DataOciGoldenGateDeploymentCertificatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentCertificatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentCertificatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]]

---


### DataOciGoldenGateDeploymentCertificatesFilterOutputReference <a name="DataOciGoldenGateDeploymentCertificatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificates

dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGoldenGateDeploymentCertificatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificates.DataOciGoldenGateDeploymentCertificatesFilter">DataOciGoldenGateDeploymentCertificatesFilter</a>]

---



