# `dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatements <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements oci_database_management_managed_database_cursor_cache_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  opc_named_credential_id: str = None,
  sql_text: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.sqlText">sql_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `sql_text`<sup>Optional</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.sqlText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText">reset_sql_text</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

##### `reset_sql_text` <a name="reset_sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText"></a>

```python
def reset_sql_text() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseCursorCacheStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection">cursor_cache_statement_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput">sql_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cursor_cache_statement_collection`<sup>Required</sup> <a name="cursor_cache_statement_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection"></a>

```python
cursor_cache_statement_collection: DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `sql_text_input`<sup>Optional</sup> <a name="sql_text_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput"></a>

```python
sql_text_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  opc_named_credential_id: str = None,
  sql_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText">sql_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `sql_text`<sup>Optional</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection()
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId">sql_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `sql_id`<sup>Required</sup> <a name="sql_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId"></a>

```python
sql_id: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_cursor_cache_statements

dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>]

---



