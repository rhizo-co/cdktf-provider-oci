# `dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpoints <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints(
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
  endpoint_service_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None,
  subnet_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.endpointServiceId">endpoint_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `endpoint_service_id`<sup>Optional</sup> <a name="endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.endpointServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId">reset_endpoint_service_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint_service_id` <a name="reset_endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId"></a>

```python
def reset_endpoint_service_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection">database_tools_private_endpoint_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput">endpoint_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId">endpoint_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_tools_private_endpoint_collection`<sup>Required</sup> <a name="database_tools_private_endpoint_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection"></a>

```python
database_tools_private_endpoint_collection: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter"></a>

```python
filter: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_service_id_input`<sup>Optional</sup> <a name="endpoint_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput"></a>

```python
endpoint_service_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_service_id`<sup>Required</sup> <a name="endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId"></a>

```python
endpoint_service_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  endpoint_service_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId">endpoint_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `endpoint_service_id`<sup>Optional</sup> <a name="endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId"></a>

```python
endpoint_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps()
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns">additional_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId">endpoint_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId">private_endpoint_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration">reverse_connection_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_fqdns`<sup>Required</sup> <a name="additional_fqdns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns"></a>

```python
additional_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `endpoint_service_id`<sup>Required</sup> <a name="endpoint_service_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId"></a>

```python
endpoint_service_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_vnic_id`<sup>Required</sup> <a name="private_endpoint_vnic_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId"></a>

```python
private_endpoint_vnic_id: str
```

- *Type:* str

---

##### `reverse_connection_configuration`<sup>Required</sup> <a name="reverse_connection_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration"></a>

```python
reverse_connection_configuration: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">reverse_connections_source_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reverse_connections_source_ips`<sup>Required</sup> <a name="reverse_connections_source_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```python
reverse_connections_source_ips: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]]

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_private_endpoints

dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>]

---



