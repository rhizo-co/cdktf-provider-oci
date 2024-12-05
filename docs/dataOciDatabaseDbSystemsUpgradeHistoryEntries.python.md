# `dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule <a name="`dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries oci_database_db_systems_upgrade_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]] = None,
  id: str = None,
  state: str = None,
  upgrade_action: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.upgradeAction">upgrade_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#filter DataOciDatabaseDbSystemsUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}.

---

##### `upgrade_action`<sup>Optional</sup> <a name="upgrade_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.upgradeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction">reset_upgrade_action</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_upgrade_action` <a name="reset_upgrade_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction"></a>

```python
def reset_upgrade_action() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDbSystemsUpgradeHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries">db_system_upgrade_history_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput">upgrade_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction">upgrade_action</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_system_upgrade_history_entries`<sup>Required</sup> <a name="db_system_upgrade_history_entries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries"></a>

```python
db_system_upgrade_history_entries: DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter"></a>

```python
filter: DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a>

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `upgrade_action_input`<sup>Optional</sup> <a name="upgrade_action_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput"></a>

```python
upgrade_action_input: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `upgrade_action`<sup>Required</sup> <a name="upgrade_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction"></a>

```python
upgrade_action: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]] = None,
  id: str = None,
  state: str = None,
  upgrade_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction">upgrade_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#filter DataOciDatabaseDbSystemsUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}.

---

##### `upgrade_action`<sup>Optional</sup> <a name="upgrade_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction"></a>

```python
upgrade_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}.

---

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries()
```


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion">new_gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion">new_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion">old_gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion">old_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `new_gi_version`<sup>Required</sup> <a name="new_gi_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion"></a>

```python
new_gi_version: str
```

- *Type:* str

---

##### `new_os_version`<sup>Required</sup> <a name="new_os_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion"></a>

```python
new_os_version: str
```

- *Type:* str

---

##### `old_gi_version`<sup>Required</sup> <a name="old_gi_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion"></a>

```python
old_gi_version: str
```

- *Type:* str

---

##### `old_os_version`<sup>Required</sup> <a name="old_os_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion"></a>

```python
old_os_version: str
```

- *Type:* str

---

##### `snapshot_retention_period_in_days`<sup>Required</sup> <a name="snapshot_retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays"></a>

```python
snapshot_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a>

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]]

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_systems_upgrade_history_entries

dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>]

---



