# `dataOciServiceMeshVirtualServiceRouteTables` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTables <a name="DataOciServiceMeshVirtualServiceRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables oci_service_mesh_virtual_service_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None,
  virtual_service_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId">reset_virtual_service_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_virtual_service_id` <a name="reset_virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId"></a>

```python
def reset_virtual_service_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshVirtualServiceRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection">virtual_service_route_table_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter"></a>

```python
filter: DataOciServiceMeshVirtualServiceRouteTablesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a>

---

##### `virtual_service_route_table_collection`<sup>Required</sup> <a name="virtual_service_route_table_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection"></a>

```python
virtual_service_route_table_collection: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTablesConfig <a name="DataOciServiceMeshVirtualServiceRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None,
  virtual_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

### DataOciServiceMeshVirtualServiceRouteTablesFilter <a name="DataOciServiceMeshVirtualServiceRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}.

---

### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection()
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems()
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules()
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTablesFilterList <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceMeshVirtualServiceRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]]

---


### DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceMeshVirtualServiceRouteTablesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>]

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules">route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```python
route_rules: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId">virtual_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_deployment_id`<sup>Required</sup> <a name="virtual_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```python
virtual_deployment_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">is_grpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```python
destinations: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `is_grpc`<sup>Required</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```python
is_grpc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_virtual_service_route_tables

dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a>

---



