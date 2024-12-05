# `dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalytics <a name="DataOciDataSafeSqlFirewallPolicyAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics oci_data_safe_sql_firewall_policy_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  security_policy_id: str = None,
  state: str = None,
  time_ended: str = None,
  time_started: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.securityPolicyId">security_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.timeEnded">time_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.timeStarted">time_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#filter DataOciDataSafeSqlFirewallPolicyAnalytics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_id`<sup>Optional</sup> <a name="security_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.securityPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}.

---

##### `time_ended`<sup>Optional</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.timeEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}.

---

##### `time_started`<sup>Optional</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.timeStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId">reset_security_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded">reset_time_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted">reset_time_started</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_policy_id` <a name="reset_security_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId"></a>

```python
def reset_security_policy_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_ended` <a name="reset_time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded"></a>

```python
def reset_time_ended() -> None
```

##### `reset_time_started` <a name="reset_time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted"></a>

```python
def reset_time_started() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicyAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSqlFirewallPolicyAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicyAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection">sql_firewall_policy_analytics_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput">security_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput">time_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput">time_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter"></a>

```python
filter: DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a>

---

##### `sql_firewall_policy_analytics_collection`<sup>Required</sup> <a name="sql_firewall_policy_analytics_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection"></a>

```python
sql_firewall_policy_analytics_collection: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_id_input`<sup>Optional</sup> <a name="security_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput"></a>

```python
security_policy_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_ended_input`<sup>Optional</sup> <a name="time_ended_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput"></a>

```python
time_ended_input: str
```

- *Type:* str

---

##### `time_started_input`<sup>Optional</sup> <a name="time_started_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput"></a>

```python
time_started_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_id`<sup>Required</sup> <a name="security_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsConfig <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  security_policy_id: str = None,
  state: str = None,
  time_ended: str = None,
  time_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded">time_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted">time_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#filter DataOciDataSafeSqlFirewallPolicyAnalytics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_id`<sup>Optional</sup> <a name="security_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}.

---

##### `time_ended`<sup>Optional</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}.

---

##### `time_started`<sup>Optional</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilter <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection()
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems()
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]]

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSqlFirewallPolicyAnalyticsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter">DataOciDataSafeSqlFirewallPolicyAnalyticsFilter</a>]

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope">enforcement_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">violation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_scope`<sup>Required</sup> <a name="enforcement_scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope"></a>

```python
enforcement_scope: str
```

- *Type:* str

---

##### `security_policy_id`<sup>Required</sup> <a name="security_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `violation_action`<sup>Required</sup> <a name="violation_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```python
violation_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount">sql_firewall_policy_analytic_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```python
dimensions: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a>

---

##### `sql_firewall_policy_analytic_count`<sup>Required</sup> <a name="sql_firewall_policy_analytic_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount"></a>

```python
sql_firewall_policy_analytic_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sql_firewall_policy_analytics

dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a>

---



