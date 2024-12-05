# `dataOciServiceMeshVirtualDeployments` Submodule <a name="`dataOciServiceMeshVirtualDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualDeployments <a name="DataOciServiceMeshVirtualDeployments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments oci_service_mesh_virtual_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None,
  virtual_service_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#filter DataOciServiceMeshVirtualDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.Initializer.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetVirtualServiceId">reset_virtual_service_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_virtual_service_id` <a name="reset_virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.resetVirtualServiceId"></a>

```python
def reset_virtual_service_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshVirtualDeployments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshVirtualDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList">DataOciServiceMeshVirtualDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualDeploymentCollection">virtual_deployment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filter"></a>

```python
filter: DataOciServiceMeshVirtualDeploymentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList">DataOciServiceMeshVirtualDeploymentsFilterList</a>

---

##### `virtual_deployment_collection`<sup>Required</sup> <a name="virtual_deployment_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualDeploymentCollection"></a>

```python
virtual_deployment_collection: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeployments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualDeploymentsConfig <a name="DataOciServiceMeshVirtualDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None,
  virtual_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#compartment_id DataOciServiceMeshVirtualDeployments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#filter DataOciServiceMeshVirtualDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#id DataOciServiceMeshVirtualDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#state DataOciServiceMeshVirtualDeployments#state}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsConfig.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#virtual_service_id DataOciServiceMeshVirtualDeployments#virtual_service_id}.

---

### DataOciServiceMeshVirtualDeploymentsFilter <a name="DataOciServiceMeshVirtualDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#values DataOciServiceMeshVirtualDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#regex DataOciServiceMeshVirtualDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#name DataOciServiceMeshVirtualDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#values DataOciServiceMeshVirtualDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_deployments#regex DataOciServiceMeshVirtualDeployments#regex}.

---

### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection()
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems()
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging()
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners()
```


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualDeploymentsFilterList <a name="DataOciServiceMeshVirtualDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]]

---


### DataOciServiceMeshVirtualDeploymentsFilterOutputReference <a name="DataOciServiceMeshVirtualDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceMeshVirtualDeploymentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsFilter">DataOciServiceMeshVirtualDeploymentsFilter</a>]

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLogging</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.idleTimeoutInMs">idle_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_in_ms`<sup>Required</sup> <a name="idle_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.idleTimeoutInMs"></a>

```python
idle_timeout_in_ms: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListeners</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_logging`<sup>Required</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.accessLogging"></a>

```python
access_logging: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsAccessLoggingList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.listeners"></a>

```python
listeners: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsListenersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.serviceDiscovery"></a>

```python
service_discovery: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItems</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsServiceDiscovery</a>

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference <a name="DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_deployments

dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualDeployments.DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection">DataOciServiceMeshVirtualDeploymentsVirtualDeploymentCollection</a>

---



