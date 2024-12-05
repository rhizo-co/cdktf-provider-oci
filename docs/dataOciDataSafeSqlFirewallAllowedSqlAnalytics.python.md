# `dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalytics <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics oci_data_safe_sql_firewall_allowed_sql_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  scim_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#filter DataOciDataSafeSqlFirewallAllowedSqlAnalytics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scimQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery">reset_scim_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scim_query` <a name="reset_scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery"></a>

```python
def reset_scim_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSqlFirewallAllowedSqlAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection">sql_firewall_allowed_sql_analytics_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput">scim_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery">scim_query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter"></a>

```python
filter: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a>

---

##### `sql_firewall_allowed_sql_analytics_collection`<sup>Required</sup> <a name="sql_firewall_allowed_sql_analytics_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection"></a>

```python
sql_firewall_allowed_sql_analytics_collection: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scim_query_input`<sup>Optional</sup> <a name="scim_query_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput"></a>

```python
scim_query_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scim_query`<sup>Required</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  scim_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery">scim_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#filter DataOciDataSafeSqlFirewallAllowedSqlAnalytics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_query`<sup>Optional</sup> <a name="scim_query" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery"></a>

```python
scim_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection()
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems()
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]]

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter</a>]

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">db_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId">sql_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">sql_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_user_name`<sup>Required</sup> <a name="db_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```python
db_user_name: str
```

- *Type:* str

---

##### `sql_firewall_policy_id`<sup>Required</sup> <a name="sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId"></a>

```python
sql_firewall_policy_id: str
```

- *Type:* str

---

##### `sql_level`<sup>Required</sup> <a name="sql_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```python
sql_level: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount">sql_firewall_allowed_sql_analytic_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```python
dimensions: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a>

---

##### `sql_firewall_allowed_sql_analytic_count`<sup>Required</sup> <a name="sql_firewall_allowed_sql_analytic_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount"></a>

```python
sql_firewall_allowed_sql_analytic_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_allowed_sql_analytics

dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a>

---



