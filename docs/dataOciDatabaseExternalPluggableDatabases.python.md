# `dataOciDatabaseExternalPluggableDatabases` Submodule <a name="`dataOciDatabaseExternalPluggableDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalPluggableDatabases <a name="DataOciDatabaseExternalPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases oci_database_external_pluggable_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases(
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
  external_container_database_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.externalContainerDatabaseId">external_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}.

---

##### `external_container_database_id`<sup>Optional</sup> <a name="external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.externalContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#filter DataOciDatabaseExternalPluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetExternalContainerDatabaseId">reset_external_container_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_container_database_id` <a name="reset_external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetExternalContainerDatabaseId"></a>

```python
def reset_external_container_database_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseExternalPluggableDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseExternalPluggableDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalPluggableDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalPluggableDatabases">external_pluggable_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList">DataOciDatabaseExternalPluggableDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseIdInput">external_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseId">external_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_pluggable_databases`<sup>Required</sup> <a name="external_pluggable_databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalPluggableDatabases"></a>

```python
external_pluggable_databases: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filter"></a>

```python
filter: DataOciDatabaseExternalPluggableDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList">DataOciDatabaseExternalPluggableDatabasesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_container_database_id_input`<sup>Optional</sup> <a name="external_container_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseIdInput"></a>

```python
external_container_database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_container_database_id`<sup>Required</sup> <a name="external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseId"></a>

```python
external_container_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalPluggableDatabasesConfig <a name="DataOciDatabaseExternalPluggableDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  external_container_database_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.externalContainerDatabaseId">external_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}.

---

##### `external_container_database_id`<sup>Optional</sup> <a name="external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.externalContainerDatabaseId"></a>

```python
external_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#filter DataOciDatabaseExternalPluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}.

---

### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases()
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig()
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig()
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig()
```


### DataOciDatabaseExternalPluggableDatabasesFilter <a name="DataOciDatabaseExternalPluggableDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#name DataOciDatabaseExternalPluggableDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#values DataOciDatabaseExternalPluggableDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#regex DataOciDatabaseExternalPluggableDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#name DataOciDatabaseExternalPluggableDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#values DataOciDatabaseExternalPluggableDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#regex DataOciDatabaseExternalPluggableDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">database_management_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_management_connection_id`<sup>Required</sup> <a name="database_management_connection_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```python
database_management_connection_id: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">operations_insights_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations_insights_connector_id`<sup>Required</sup> <a name="operations_insights_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```python
operations_insights_connector_id: str
```

- *Type:* str

---

##### `operations_insights_status`<sup>Required</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseConfiguration">database_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbId">db_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbPacks">db_packs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.externalContainerDatabaseId">external_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.operationsInsightsConfig">operations_insights_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.stackMonitoringConfig">stack_monitoring_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseConfiguration"></a>

```python
database_configuration: str
```

- *Type:* str

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_config`<sup>Required</sup> <a name="database_management_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseManagementConfig"></a>

```python
database_management_config: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList</a>

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `db_id`<sup>Required</sup> <a name="db_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbId"></a>

```python
db_id: str
```

- *Type:* str

---

##### `db_packs`<sup>Required</sup> <a name="db_packs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbPacks"></a>

```python
db_packs: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_container_database_id`<sup>Required</sup> <a name="external_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.externalContainerDatabaseId"></a>

```python
external_container_database_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `operations_insights_config`<sup>Required</sup> <a name="operations_insights_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.operationsInsightsConfig"></a>

```python
operations_insights_config: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList</a>

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `stack_monitoring_config`<sup>Required</sup> <a name="stack_monitoring_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.stackMonitoringConfig"></a>

```python
stack_monitoring_config: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stack_monitoring_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stack_monitoring_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_monitoring_connector_id`<sup>Required</sup> <a name="stack_monitoring_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```python
stack_monitoring_connector_id: str
```

- *Type:* str

---

##### `stack_monitoring_status`<sup>Required</sup> <a name="stack_monitoring_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```python
stack_monitoring_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesFilterList <a name="DataOciDatabaseExternalPluggableDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalPluggableDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalPluggableDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]]

---


### DataOciDatabaseExternalPluggableDatabasesFilterOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_pluggable_databases

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseExternalPluggableDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>]

---



