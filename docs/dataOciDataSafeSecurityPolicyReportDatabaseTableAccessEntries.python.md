# `dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries oci_data_safe_security_policy_report_database_table_access_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]] = None,
  id: str = None,
  scim_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#scim_query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.Initializer.parameter.scimQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#scim_query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetScimQuery">reset_scim_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scim_query` <a name="reset_scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.resetScimQuery"></a>

```python
def reset_scim_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.databaseTableAccessEntryCollection">database_table_access_entry_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.scimQueryInput">scim_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.scimQuery">scim_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_table_access_entry_collection`<sup>Required</sup> <a name="database_table_access_entry_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.databaseTableAccessEntryCollection"></a>

```python
database_table_access_entry_collection: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.filter"></a>

```python
filter: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scim_query_input`<sup>Optional</sup> <a name="scim_query_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.scimQueryInput"></a>

```python
scim_query_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scim_query`<sup>Required</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]] = None,
  id: str = None,
  scim_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#scim_query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#scim_query}.

---

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection()
```


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems()
```


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.accessThroughObject">access_through_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.areAllTablesAccessible">are_all_tables_accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantFromRole">grant_from_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault">is_access_constrained_by_database_vault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByLabelSecurity">is_access_constrained_by_label_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity">is_access_constrained_by_real_application_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction">is_access_constrained_by_redaction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall">is_access_constrained_by_sql_firewall</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByView">is_access_constrained_by_view</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase">is_access_constrained_by_virtual_private_database</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isSensitive">is_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilegeGrantable">privilege_grantable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.tableSchema">table_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_through_object`<sup>Required</sup> <a name="access_through_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.accessThroughObject"></a>

```python
access_through_object: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `are_all_tables_accessible`<sup>Required</sup> <a name="are_all_tables_accessible" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.areAllTablesAccessible"></a>

```python
are_all_tables_accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grant_from_role`<sup>Required</sup> <a name="grant_from_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantFromRole"></a>

```python
grant_from_role: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `is_access_constrained_by_database_vault`<sup>Required</sup> <a name="is_access_constrained_by_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault"></a>

```python
is_access_constrained_by_database_vault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_label_security`<sup>Required</sup> <a name="is_access_constrained_by_label_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByLabelSecurity"></a>

```python
is_access_constrained_by_label_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_real_application_security`<sup>Required</sup> <a name="is_access_constrained_by_real_application_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity"></a>

```python
is_access_constrained_by_real_application_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_redaction`<sup>Required</sup> <a name="is_access_constrained_by_redaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction"></a>

```python
is_access_constrained_by_redaction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_sql_firewall`<sup>Required</sup> <a name="is_access_constrained_by_sql_firewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall"></a>

```python
is_access_constrained_by_sql_firewall: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_view`<sup>Required</sup> <a name="is_access_constrained_by_view" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByView"></a>

```python
is_access_constrained_by_view: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_virtual_private_database`<sup>Required</sup> <a name="is_access_constrained_by_virtual_private_database" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```python
is_access_constrained_by_virtual_private_database: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sensitive`<sup>Required</sup> <a name="is_sensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.isSensitive"></a>

```python
is_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `privilege_grantable`<sup>Required</sup> <a name="privilege_grantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilegeGrantable"></a>

```python
privilege_grantable: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `table_schema`<sup>Required</sup> <a name="table_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.tableSchema"></a>

```python
table_schema: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]]

---


### DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_table_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter</a>]

---



