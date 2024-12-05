# `dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule <a name="`dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries oci_database_database_pdb_conversion_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]] = None,
  id: str = None,
  pdb_conversion_action: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.pdbConversionAction">pdb_conversion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#filter DataOciDatabaseDatabasePdbConversionHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdb_conversion_action`<sup>Optional</sup> <a name="pdb_conversion_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.pdbConversionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction">reset_pdb_conversion_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pdb_conversion_action` <a name="reset_pdb_conversion_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction"></a>

```python
def reset_pdb_conversion_action() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDatabasePdbConversionHistoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDatabasePdbConversionHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabasePdbConversionHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries">pdb_conversion_history_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput">pdb_conversion_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction">pdb_conversion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter"></a>

```python
filter: DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a>

---

##### `pdb_conversion_history_entries`<sup>Required</sup> <a name="pdb_conversion_history_entries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries"></a>

```python
pdb_conversion_history_entries: DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a>

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pdb_conversion_action_input`<sup>Optional</sup> <a name="pdb_conversion_action_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput"></a>

```python
pdb_conversion_action_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pdb_conversion_action`<sup>Required</sup> <a name="pdb_conversion_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction"></a>

```python
pdb_conversion_action: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]] = None,
  id: str = None,
  pdb_conversion_action: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction">pdb_conversion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#filter DataOciDatabaseDatabasePdbConversionHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdb_conversion_action`<sup>Optional</sup> <a name="pdb_conversion_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction"></a>

```python
pdb_conversion_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]]

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter</a>]

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_database_pdb_conversion_history_entries

dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams">additional_cdb_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName">cdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId">source_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `additional_cdb_params`<sup>Required</sup> <a name="additional_cdb_params" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams"></a>

```python
additional_cdb_params: str
```

- *Type:* str

---

##### `cdb_name`<sup>Required</sup> <a name="cdb_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName"></a>

```python
cdb_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `source_database_id`<sup>Required</sup> <a name="source_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId"></a>

```python
source_database_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a>

---



