# `dataOciDatabaseAutonomousDatabaseBackups` Submodule <a name="`dataOciDatabaseAutonomousDatabaseBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups oci_database_autonomous_database_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]] = None,
  id: str = None,
  state: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Optional</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#filter DataOciDatabaseAutonomousDatabaseBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId">reset_autonomous_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]

---

##### `reset_autonomous_database_id` <a name="reset_autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId"></a>

```python
def reset_autonomous_database_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseBackups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabaseBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups">autonomous_database_backups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_database_backups`<sup>Required</sup> <a name="autonomous_database_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups"></a>

```python
autonomous_database_backups: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabaseBackupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a>

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups()
```


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails()
```


### DataOciDatabaseAutonomousDatabaseBackupsConfig <a name="DataOciDatabaseAutonomousDatabaseBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]] = None,
  id: str = None,
  state: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Optional</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#filter DataOciDatabaseAutonomousDatabaseBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}.

---

### DataOciDatabaseAutonomousDatabaseBackupsFilter <a name="DataOciDatabaseAutonomousDatabaseBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy">internet_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword">vpc_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_proxy`<sup>Required</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_password`<sup>Required</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs">database_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic">is_automatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup">is_long_term_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable">is_restorable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs">size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill">time_available_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_size_in_tbs`<sup>Required</sup> <a name="database_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs"></a>

```python
database_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatic`<sup>Required</sup> <a name="is_automatic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic"></a>

```python
is_automatic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_long_term_backup`<sup>Required</sup> <a name="is_long_term_backup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup"></a>

```python
is_long_term_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restorable`<sup>Required</sup> <a name="is_restorable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable"></a>

```python
is_restorable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_tbs`<sup>Required</sup> <a name="size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs"></a>

```python
size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_available_till`<sup>Required</sup> <a name="time_available_till" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill"></a>

```python
time_available_till: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterList <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]]

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_backups

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabaseBackupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>]

---



