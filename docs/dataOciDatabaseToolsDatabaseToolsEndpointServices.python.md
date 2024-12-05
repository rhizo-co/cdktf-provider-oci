# `dataOciDatabaseToolsDatabaseToolsEndpointServices` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsEndpointServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServices <a name="DataOciDatabaseToolsDatabaseToolsEndpointServices" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services oci_database_tools_database_tools_endpoint_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#filter DataOciDatabaseToolsDatabaseToolsEndpointServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsEndpointServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsEndpointServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsEndpointServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseToolsDatabaseToolsEndpointServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsEndpointServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.databaseToolsEndpointServiceCollection">database_tools_endpoint_service_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_tools_endpoint_service_collection`<sup>Required</sup> <a name="database_tools_endpoint_service_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.databaseToolsEndpointServiceCollection"></a>

```python
database_tools_endpoint_service_collection: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filter"></a>

```python
filter: DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#filter DataOciDatabaseToolsDatabaseToolsEndpointServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}.

---

### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection()
```


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems()
```


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#values DataOciDatabaseToolsDatabaseToolsEndpointServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#regex DataOciDatabaseToolsDatabaseToolsEndpointServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#values DataOciDatabaseToolsDatabaseToolsEndpointServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#regex DataOciDatabaseToolsDatabaseToolsEndpointServices#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]]

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_endpoint_services

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>]

---



