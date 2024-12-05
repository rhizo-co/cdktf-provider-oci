# `dataOciDatabaseToolsDatabaseToolsConnections` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsConnections <a name="DataOciDatabaseToolsDatabaseToolsConnections" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections oci_database_tools_database_tools_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]] = None,
  id: str = None,
  related_resource_identifier: str = None,
  runtime_support: typing.List[str] = None,
  state: str = None,
  type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.relatedResourceIdentifier">related_resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.runtimeSupport">runtime_support</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#filter DataOciDatabaseToolsDatabaseToolsConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `related_resource_identifier`<sup>Optional</sup> <a name="related_resource_identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.relatedResourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}.

---

##### `runtime_support`<sup>Optional</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.runtimeSupport"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.type"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier">reset_related_resource_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport">reset_runtime_support</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_related_resource_identifier` <a name="reset_related_resource_identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier"></a>

```python
def reset_related_resource_identifier() -> None
```

##### `reset_runtime_support` <a name="reset_runtime_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport"></a>

```python
def reset_runtime_support() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsConnections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseToolsDatabaseToolsConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection">database_tools_connection_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput">related_resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput">runtime_support_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput">type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier">related_resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport">runtime_support</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type">type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_tools_connection_collection`<sup>Required</sup> <a name="database_tools_connection_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection"></a>

```python
database_tools_connection_collection: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter"></a>

```python
filter: DataOciDatabaseToolsDatabaseToolsConnectionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `related_resource_identifier_input`<sup>Optional</sup> <a name="related_resource_identifier_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput"></a>

```python
related_resource_identifier_input: str
```

- *Type:* str

---

##### `runtime_support_input`<sup>Optional</sup> <a name="runtime_support_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput"></a>

```python
runtime_support_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput"></a>

```python
type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `related_resource_identifier`<sup>Required</sup> <a name="related_resource_identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier"></a>

```python
related_resource_identifier: str
```

- *Type:* str

---

##### `runtime_support`<sup>Required</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport"></a>

```python
runtime_support: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsConfig <a name="DataOciDatabaseToolsDatabaseToolsConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]] = None,
  id: str = None,
  related_resource_identifier: str = None,
  runtime_support: typing.List[str] = None,
  state: str = None,
  type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier">related_resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport">runtime_support</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#filter DataOciDatabaseToolsDatabaseToolsConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `related_resource_identifier`<sup>Optional</sup> <a name="related_resource_identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier"></a>

```python
related_resource_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}.

---

##### `runtime_support`<sup>Optional</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport"></a>

```python
runtime_support: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}.

---

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword()
```


### DataOciDatabaseToolsDatabaseToolsConnectionsFilter <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent">key_store_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword">key_store_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType">key_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent"></a>

```python
key_store_content: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a>

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword"></a>

```python
key_store_password: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a>

---

##### `key_store_type`<sup>Required</sup> <a name="key_store_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType"></a>

```python
key_store_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties">advanced_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores">key_stores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient">proxy_client</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource">related_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport">runtime_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_properties`<sup>Required</sup> <a name="advanced_properties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties"></a>

```python
advanced_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_stores`<sup>Required</sup> <a name="key_stores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores"></a>

```python
key_stores: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a>

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `proxy_client`<sup>Required</sup> <a name="proxy_client" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient"></a>

```python
proxy_client: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a>

---

##### `related_resource`<sup>Required</sup> <a name="related_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource"></a>

```python
related_resource: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a>

---

##### `runtime_support`<sup>Required</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport"></a>

```python
runtime_support: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword"></a>

```python
user_password: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType">proxy_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proxy_authentication_type`<sup>Required</sup> <a name="proxy_authentication_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType"></a>

```python
proxy_authentication_type: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword"></a>

```python
user_password: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseToolsDatabaseToolsConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]]

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_tools_database_tools_connections

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseToolsDatabaseToolsConnectionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>]

---



