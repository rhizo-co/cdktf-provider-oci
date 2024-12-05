# `dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule <a name="`dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntry <a name="DataOciDatabaseDatabaseUpgradeHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry oci_database_database_upgrade_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  upgrade_history_entry_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.upgradeHistoryEntryId">upgrade_history_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}.

---

##### `upgrade_history_entry_id`<sup>Required</sup> <a name="upgrade_history_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.upgradeHistoryEntryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDatabaseUpgradeHistoryEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDatabaseUpgradeHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseUpgradeHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId">source_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId">target_database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId">target_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion">target_db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput">upgrade_history_entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId">upgrade_history_entry_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_db_home_id`<sup>Required</sup> <a name="source_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId"></a>

```python
source_db_home_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_database_software_image_id`<sup>Required</sup> <a name="target_database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId"></a>

```python
target_database_software_image_id: str
```

- *Type:* str

---

##### `target_db_home_id`<sup>Required</sup> <a name="target_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId"></a>

```python
target_db_home_id: str
```

- *Type:* str

---

##### `target_db_version`<sup>Required</sup> <a name="target_db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion"></a>

```python
target_db_version: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `upgrade_history_entry_id_input`<sup>Optional</sup> <a name="upgrade_history_entry_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput"></a>

```python
upgrade_history_entry_id_input: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `upgrade_history_entry_id`<sup>Required</sup> <a name="upgrade_history_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId"></a>

```python
upgrade_history_entry_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntryConfig <a name="DataOciDatabaseDatabaseUpgradeHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_upgrade_history_entry

dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  upgrade_history_entry_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId">upgrade_history_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}.

---

##### `upgrade_history_entry_id`<sup>Required</sup> <a name="upgrade_history_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId"></a>

```python
upgrade_history_entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



