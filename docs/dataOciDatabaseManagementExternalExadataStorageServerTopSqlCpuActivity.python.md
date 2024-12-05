# `dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity oci_database_management_external_exadata_storage_server_top_sql_cpu_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_server_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.externalExadataStorageServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.activity">activity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerIdInput">external_exadata_storage_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `activity`<sup>Required</sup> <a name="activity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.activity"></a>

```python
activity: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList</a>

---

##### `external_exadata_storage_server_id_input`<sup>Optional</sup> <a name="external_exadata_storage_server_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerIdInput"></a>

```python
external_exadata_storage_server_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity()
```


### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_server_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_top_sql_cpu_activity

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.cpuActivity">cpu_activity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.sqlId">sql_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_activity`<sup>Required</sup> <a name="cpu_activity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.cpuActivity"></a>

```python
cpu_activity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `sql_id`<sup>Required</sup> <a name="sql_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.sqlId"></a>

```python
sql_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity</a>

---



