# `dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries oci_data_safe_security_policy_report_database_view_access_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]] = None,
  id: str = None,
  scim_query: str = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scimQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetScimQuery">reset_scim_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scim_query` <a name="reset_scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetScimQuery"></a>

```python
def reset_scim_query() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.databaseViewAccessEntryCollection">database_view_access_entry_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQueryInput">scim_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQuery">scim_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_view_access_entry_collection`<sup>Required</sup> <a name="database_view_access_entry_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.databaseViewAccessEntryCollection"></a>

```python
database_view_access_entry_collection: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filter"></a>

```python
filter: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scim_query_input`<sup>Optional</sup> <a name="scim_query_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQueryInput"></a>

```python
scim_query_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scim_query`<sup>Required</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]] = None,
  id: str = None,
  scim_query: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}.

---

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection()
```


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems()
```


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantFromRole">grant_from_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault">is_access_constrained_by_database_vault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity">is_access_constrained_by_real_application_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction">is_access_constrained_by_redaction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall">is_access_constrained_by_sql_firewall</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase">is_access_constrained_by_virtual_private_database</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeGrantable">privilege_grantable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeType">privilege_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableSchema">table_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewName">view_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewSchema">view_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewText">view_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `grant_from_role`<sup>Required</sup> <a name="grant_from_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantFromRole"></a>

```python
grant_from_role: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `is_access_constrained_by_database_vault`<sup>Required</sup> <a name="is_access_constrained_by_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault"></a>

```python
is_access_constrained_by_database_vault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_real_application_security`<sup>Required</sup> <a name="is_access_constrained_by_real_application_security" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity"></a>

```python
is_access_constrained_by_real_application_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_redaction`<sup>Required</sup> <a name="is_access_constrained_by_redaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction"></a>

```python
is_access_constrained_by_redaction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_sql_firewall`<sup>Required</sup> <a name="is_access_constrained_by_sql_firewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall"></a>

```python
is_access_constrained_by_sql_firewall: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_access_constrained_by_virtual_private_database`<sup>Required</sup> <a name="is_access_constrained_by_virtual_private_database" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```python
is_access_constrained_by_virtual_private_database: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `privilege_grantable`<sup>Required</sup> <a name="privilege_grantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeGrantable"></a>

```python
privilege_grantable: str
```

- *Type:* str

---

##### `privilege_type`<sup>Required</sup> <a name="privilege_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeType"></a>

```python
privilege_type: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `table_schema`<sup>Required</sup> <a name="table_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableSchema"></a>

```python
table_schema: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `view_name`<sup>Required</sup> <a name="view_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewName"></a>

```python
view_name: str
```

- *Type:* str

---

##### `view_schema`<sup>Required</sup> <a name="view_schema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewSchema"></a>

```python
view_schema: str
```

- *Type:* str

---

##### `view_text`<sup>Required</sup> <a name="view_text" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewText"></a>

```python
view_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]]

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_database_view_access_entries

dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter</a>]

---



