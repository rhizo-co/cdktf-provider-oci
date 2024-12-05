# `dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry oci_data_safe_security_policy_report_database_table_access_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_table_access_entry_key: str,
  security_policy_report_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.databaseTableAccessEntryKey">database_table_access_entry_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#database_table_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#database_table_access_entry_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_table_access_entry_key`<sup>Required</sup> <a name="database_table_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.databaseTableAccessEntryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#database_table_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#database_table_access_entry_key}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#security_policy_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.accessThroughObject">access_through_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.areAllTablesAccessible">are_all_tables_accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantFromRole">grant_from_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByDatabaseVault">is_access_constrained_by_database_vault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByLabelSecurity">is_access_constrained_by_label_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByRealApplicationSecurity">is_access_constrained_by_real_application_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByRedaction">is_access_constrained_by_redaction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedBySqlFirewall">is_access_constrained_by_sql_firewall</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByView">is_access_constrained_by_view</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase">is_access_constrained_by_virtual_private_database</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isSensitive">is_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilegeGrantable">privilege_grantable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tableSchema">table_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.databaseTableAccessEntryKeyInput">database_table_access_entry_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.databaseTableAccessEntryKey">database_table_access_entry_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_through_object`<sup>Required</sup> <a name="access_through_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.accessThroughObject"></a>

```python
access_through_object: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `are_all_tables_accessible`<sup>Required</sup> <a name="are_all_tables_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.areAllTablesAccessible"></a>

```python
are_all_tables_accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grant_from_role`<sup>Required</sup> <a name="grant_from_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantFromRole"></a>

```python
grant_from_role: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `is_access_constrained_by_database_vault`<sup>Required</sup> <a name="is_access_constrained_by_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByDatabaseVault"></a>

```python
is_access_constrained_by_database_vault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_label_security`<sup>Required</sup> <a name="is_access_constrained_by_label_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByLabelSecurity"></a>

```python
is_access_constrained_by_label_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_real_application_security`<sup>Required</sup> <a name="is_access_constrained_by_real_application_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByRealApplicationSecurity"></a>

```python
is_access_constrained_by_real_application_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_redaction`<sup>Required</sup> <a name="is_access_constrained_by_redaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByRedaction"></a>

```python
is_access_constrained_by_redaction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_sql_firewall`<sup>Required</sup> <a name="is_access_constrained_by_sql_firewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedBySqlFirewall"></a>

```python
is_access_constrained_by_sql_firewall: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_view`<sup>Required</sup> <a name="is_access_constrained_by_view" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByView"></a>

```python
is_access_constrained_by_view: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_virtual_private_database`<sup>Required</sup> <a name="is_access_constrained_by_virtual_private_database" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```python
is_access_constrained_by_virtual_private_database: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sensitive`<sup>Required</sup> <a name="is_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.isSensitive"></a>

```python
is_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `privilege_grantable`<sup>Required</sup> <a name="privilege_grantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilegeGrantable"></a>

```python
privilege_grantable: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `table_schema`<sup>Required</sup> <a name="table_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tableSchema"></a>

```python
table_schema: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `database_table_access_entry_key_input`<sup>Optional</sup> <a name="database_table_access_entry_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.databaseTableAccessEntryKeyInput"></a>

```python
database_table_access_entry_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `database_table_access_entry_key`<sup>Required</sup> <a name="database_table_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.databaseTableAccessEntryKey"></a>

```python
database_table_access_entry_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_table_access_entry_key: str,
  security_policy_report_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.databaseTableAccessEntryKey">database_table_access_entry_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#database_table_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#database_table_access_entry_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_table_access_entry_key`<sup>Required</sup> <a name="database_table_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.databaseTableAccessEntryKey"></a>

```python
database_table_access_entry_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#database_table_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#database_table_access_entry_key}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#security_policy_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



