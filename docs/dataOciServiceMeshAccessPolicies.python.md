# `dataOciServiceMeshAccessPolicies` Submodule <a name="`dataOciServiceMeshAccessPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshAccessPolicies <a name="DataOciServiceMeshAccessPolicies" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies oci_service_mesh_access_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]] = None,
  id: str = None,
  mesh_id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#filter DataOciServiceMeshAccessPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_id`<sup>Optional</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.meshId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId">reset_mesh_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_id` <a name="reset_mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId"></a>

```python
def reset_mesh_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshAccessPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshAccessPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshAccessPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection">access_policy_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput">mesh_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_policy_collection`<sup>Required</sup> <a name="access_policy_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection"></a>

```python
access_policy_collection: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter"></a>

```python
filter: DataOciServiceMeshAccessPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_id_input`<sup>Optional</sup> <a name="mesh_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput"></a>

```python
mesh_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollection <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection()
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems()
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules()
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination()
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource()
```


### DataOciServiceMeshAccessPoliciesConfig <a name="DataOciServiceMeshAccessPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]] = None,
  id: str = None,
  mesh_id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#filter DataOciServiceMeshAccessPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_id`<sup>Optional</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}.

---

### DataOciServiceMeshAccessPoliciesFilter <a name="DataOciServiceMeshAccessPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules"></a>

```python
rules: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination"></a>

```python
destination: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source"></a>

```python
source: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPoliciesAccessPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a>

---


### DataOciServiceMeshAccessPoliciesFilterList <a name="DataOciServiceMeshAccessPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceMeshAccessPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]]

---


### DataOciServiceMeshAccessPoliciesFilterOutputReference <a name="DataOciServiceMeshAccessPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policies

dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceMeshAccessPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>]

---



