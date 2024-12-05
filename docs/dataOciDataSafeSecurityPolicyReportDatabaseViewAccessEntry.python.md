# `dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry oci_data_safe_security_policy_report_database_view_access_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_view_access_entry_key: str,
  security_policy_report_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.databaseViewAccessEntryKey">database_view_access_entry_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_view_access_entry_key`<sup>Required</sup> <a name="database_view_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.databaseViewAccessEntryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantFromRole">grant_from_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByDatabaseVault">is_access_constrained_by_database_vault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRealApplicationSecurity">is_access_constrained_by_real_application_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRedaction">is_access_constrained_by_redaction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedBySqlFirewall">is_access_constrained_by_sql_firewall</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase">is_access_constrained_by_virtual_private_database</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeGrantable">privilege_grantable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableSchema">table_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewName">view_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewSchema">view_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewText">view_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKeyInput">database_view_access_entry_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKey">database_view_access_entry_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grant_from_role`<sup>Required</sup> <a name="grant_from_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantFromRole"></a>

```python
grant_from_role: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `is_access_constrained_by_database_vault`<sup>Required</sup> <a name="is_access_constrained_by_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByDatabaseVault"></a>

```python
is_access_constrained_by_database_vault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_real_application_security`<sup>Required</sup> <a name="is_access_constrained_by_real_application_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRealApplicationSecurity"></a>

```python
is_access_constrained_by_real_application_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_redaction`<sup>Required</sup> <a name="is_access_constrained_by_redaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRedaction"></a>

```python
is_access_constrained_by_redaction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_sql_firewall`<sup>Required</sup> <a name="is_access_constrained_by_sql_firewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedBySqlFirewall"></a>

```python
is_access_constrained_by_sql_firewall: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_virtual_private_database`<sup>Required</sup> <a name="is_access_constrained_by_virtual_private_database" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```python
is_access_constrained_by_virtual_private_database: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `privilege_grantable`<sup>Required</sup> <a name="privilege_grantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeGrantable"></a>

```python
privilege_grantable: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `table_schema`<sup>Required</sup> <a name="table_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableSchema"></a>

```python
table_schema: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `view_name`<sup>Required</sup> <a name="view_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewName"></a>

```python
view_name: str
```

- *Type:* str

---

##### `view_schema`<sup>Required</sup> <a name="view_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewSchema"></a>

```python
view_schema: str
```

- *Type:* str

---

##### `view_text`<sup>Required</sup> <a name="view_text" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewText"></a>

```python
view_text: str
```

- *Type:* str

---

##### `database_view_access_entry_key_input`<sup>Optional</sup> <a name="database_view_access_entry_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKeyInput"></a>

```python
database_view_access_entry_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `database_view_access_entry_key`<sup>Required</sup> <a name="database_view_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKey"></a>

```python
database_view_access_entry_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entry

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_view_access_entry_key: str,
  security_policy_report_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.databaseViewAccessEntryKey">database_view_access_entry_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_view_access_entry_key`<sup>Required</sup> <a name="database_view_access_entry_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.databaseViewAccessEntryKey"></a>

```python
database_view_access_entry_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



