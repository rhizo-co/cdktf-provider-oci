# `dataSafeSqlFirewallPolicyManagement` Submodule <a name="`dataSafeSqlFirewallPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicyManagement <a name="DataSafeSqlFirewallPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management oci_data_safe_sql_firewall_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_client_ips: typing.List[str] = None,
  allowed_client_os_usernames: typing.List[str] = None,
  allowed_client_programs: typing.List[str] = None,
  compartment_id: str = None,
  db_user_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  enforcement_scope: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  sql_firewall_policy_id: str = None,
  state: str = None,
  status: str = None,
  target_id: str = None,
  timeouts: DataSafeSqlFirewallPolicyManagementTimeouts = None,
  violation_action: str = None,
  violation_audit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientIps">allowed_client_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientOsUsernames">allowed_client_os_usernames</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientPrograms">allowed_client_programs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.dbUserName">db_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.enforcementScope">enforcement_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.sqlFirewallPolicyId">sql_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.violationAction">violation_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.violationAudit">violation_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_client_ips`<sup>Optional</sup> <a name="allowed_client_ips" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}.

---

##### `allowed_client_os_usernames`<sup>Optional</sup> <a name="allowed_client_os_usernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientOsUsernames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}.

---

##### `allowed_client_programs`<sup>Optional</sup> <a name="allowed_client_programs" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.allowedClientPrograms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}.

---

##### `db_user_name`<sup>Optional</sup> <a name="db_user_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.dbUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}.

---

##### `enforcement_scope`<sup>Optional</sup> <a name="enforcement_scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.enforcementScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql_firewall_policy_id`<sup>Optional</sup> <a name="sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.sqlFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#timeouts DataSafeSqlFirewallPolicyManagement#timeouts}

---

##### `violation_action`<sup>Optional</sup> <a name="violation_action" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.violationAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}.

---

##### `violation_audit`<sup>Optional</sup> <a name="violation_audit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.violationAudit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps">reset_allowed_client_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames">reset_allowed_client_os_usernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms">reset_allowed_client_programs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName">reset_db_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope">reset_enforcement_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId">reset_sql_firewall_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction">reset_violation_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit">reset_violation_audit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}.

---

##### `reset_allowed_client_ips` <a name="reset_allowed_client_ips" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps"></a>

```python
def reset_allowed_client_ips() -> None
```

##### `reset_allowed_client_os_usernames` <a name="reset_allowed_client_os_usernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames"></a>

```python
def reset_allowed_client_os_usernames() -> None
```

##### `reset_allowed_client_programs` <a name="reset_allowed_client_programs" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms"></a>

```python
def reset_allowed_client_programs() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_db_user_name` <a name="reset_db_user_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName"></a>

```python
def reset_db_user_name() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enforcement_scope` <a name="reset_enforcement_scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope"></a>

```python
def reset_enforcement_scope() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sql_firewall_policy_id` <a name="reset_sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId"></a>

```python
def reset_sql_firewall_policy_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_violation_action` <a name="reset_violation_action" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction"></a>

```python
def reset_violation_action() -> None
```

##### `reset_violation_audit` <a name="reset_violation_audit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit"></a>

```python
def reset_violation_audit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeSqlFirewallPolicyManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeSqlFirewallPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel">sql_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput">allowed_client_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput">allowed_client_os_usernames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput">allowed_client_programs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput">db_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput">enforcement_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput">sql_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput">violation_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput">violation_audit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps">allowed_client_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames">allowed_client_os_usernames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms">allowed_client_programs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName">db_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope">enforcement_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId">sql_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction">violation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit">violation_audit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `security_policy_id`<sup>Required</sup> <a name="security_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

---

##### `sql_level`<sup>Required</sup> <a name="sql_level" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel"></a>

```python
sql_level: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts"></a>

```python
timeouts: DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `allowed_client_ips_input`<sup>Optional</sup> <a name="allowed_client_ips_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput"></a>

```python
allowed_client_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_client_os_usernames_input`<sup>Optional</sup> <a name="allowed_client_os_usernames_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput"></a>

```python
allowed_client_os_usernames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_client_programs_input`<sup>Optional</sup> <a name="allowed_client_programs_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput"></a>

```python
allowed_client_programs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_user_name_input`<sup>Optional</sup> <a name="db_user_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput"></a>

```python
db_user_name_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enforcement_scope_input`<sup>Optional</sup> <a name="enforcement_scope_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput"></a>

```python
enforcement_scope_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sql_firewall_policy_id_input`<sup>Optional</sup> <a name="sql_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput"></a>

```python
sql_firewall_policy_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeSqlFirewallPolicyManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>]

---

##### `violation_action_input`<sup>Optional</sup> <a name="violation_action_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput"></a>

```python
violation_action_input: str
```

- *Type:* str

---

##### `violation_audit_input`<sup>Optional</sup> <a name="violation_audit_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput"></a>

```python
violation_audit_input: str
```

- *Type:* str

---

##### `allowed_client_ips`<sup>Required</sup> <a name="allowed_client_ips" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps"></a>

```python
allowed_client_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_client_os_usernames`<sup>Required</sup> <a name="allowed_client_os_usernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames"></a>

```python
allowed_client_os_usernames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_client_programs`<sup>Required</sup> <a name="allowed_client_programs" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms"></a>

```python
allowed_client_programs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_user_name`<sup>Required</sup> <a name="db_user_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName"></a>

```python
db_user_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enforcement_scope`<sup>Required</sup> <a name="enforcement_scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope"></a>

```python
enforcement_scope: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sql_firewall_policy_id`<sup>Required</sup> <a name="sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId"></a>

```python
sql_firewall_policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `violation_action`<sup>Required</sup> <a name="violation_action" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction"></a>

```python
violation_action: str
```

- *Type:* str

---

##### `violation_audit`<sup>Required</sup> <a name="violation_audit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit"></a>

```python
violation_audit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyManagementConfig <a name="DataSafeSqlFirewallPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_client_ips: typing.List[str] = None,
  allowed_client_os_usernames: typing.List[str] = None,
  allowed_client_programs: typing.List[str] = None,
  compartment_id: str = None,
  db_user_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  enforcement_scope: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  sql_firewall_policy_id: str = None,
  state: str = None,
  status: str = None,
  target_id: str = None,
  timeouts: DataSafeSqlFirewallPolicyManagementTimeouts = None,
  violation_action: str = None,
  violation_audit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps">allowed_client_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames">allowed_client_os_usernames</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms">allowed_client_programs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName">db_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope">enforcement_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId">sql_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction">violation_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit">violation_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_client_ips`<sup>Optional</sup> <a name="allowed_client_ips" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps"></a>

```python
allowed_client_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}.

---

##### `allowed_client_os_usernames`<sup>Optional</sup> <a name="allowed_client_os_usernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames"></a>

```python
allowed_client_os_usernames: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}.

---

##### `allowed_client_programs`<sup>Optional</sup> <a name="allowed_client_programs" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms"></a>

```python
allowed_client_programs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}.

---

##### `db_user_name`<sup>Optional</sup> <a name="db_user_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName"></a>

```python
db_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}.

---

##### `enforcement_scope`<sup>Optional</sup> <a name="enforcement_scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope"></a>

```python
enforcement_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql_firewall_policy_id`<sup>Optional</sup> <a name="sql_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId"></a>

```python
sql_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts"></a>

```python
timeouts: DataSafeSqlFirewallPolicyManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#timeouts DataSafeSqlFirewallPolicyManagement#timeouts}

---

##### `violation_action`<sup>Optional</sup> <a name="violation_action" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction"></a>

```python
violation_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}.

---

##### `violation_audit`<sup>Optional</sup> <a name="violation_audit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit"></a>

```python
violation_audit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}.

---

### DataSafeSqlFirewallPolicyManagementTimeouts <a name="DataSafeSqlFirewallPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sql_firewall_policy_management

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeSqlFirewallPolicyManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>]

---



