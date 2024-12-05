# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]] = None,
  id: str = None,
  is_accepted: typing.Union[bool, IResolvable] = None,
  is_adaptive: typing.Union[bool, IResolvable] = None,
  is_auto_purged: typing.Union[bool, IResolvable] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  is_fixed: typing.Union[bool, IResolvable] = None,
  is_never_executed: typing.Union[bool, IResolvable] = None,
  is_reproduced: typing.Union[bool, IResolvable] = None,
  limit: typing.Union[int, float] = None,
  opc_named_credential_id: str = None,
  origin: str = None,
  plan_name: str = None,
  sql_handle: str = None,
  sql_text: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAccepted">is_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAdaptive">is_adaptive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAutoPurged">is_auto_purged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isFixed">is_fixed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isNeverExecuted">is_never_executed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isReproduced">is_reproduced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.origin">origin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.planName">plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.sqlHandle">sql_handle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.sqlText">sql_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_accepted`<sup>Optional</sup> <a name="is_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAccepted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}.

---

##### `is_adaptive`<sup>Optional</sup> <a name="is_adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAdaptive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}.

---

##### `is_auto_purged`<sup>Optional</sup> <a name="is_auto_purged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isAutoPurged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}.

---

##### `is_fixed`<sup>Optional</sup> <a name="is_fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isFixed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}.

---

##### `is_never_executed`<sup>Optional</sup> <a name="is_never_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isNeverExecuted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}.

---

##### `is_reproduced`<sup>Optional</sup> <a name="is_reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.isReproduced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.origin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}.

---

##### `plan_name`<sup>Optional</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.planName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}.

---

##### `sql_handle`<sup>Optional</sup> <a name="sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.sqlHandle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}.

---

##### `sql_text`<sup>Optional</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.sqlText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted">reset_is_accepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive">reset_is_adaptive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged">reset_is_auto_purged</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed">reset_is_fixed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted">reset_is_never_executed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced">reset_is_reproduced</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName">reset_plan_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle">reset_sql_handle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText">reset_sql_text</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_accepted` <a name="reset_is_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted"></a>

```python
def reset_is_accepted() -> None
```

##### `reset_is_adaptive` <a name="reset_is_adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive"></a>

```python
def reset_is_adaptive() -> None
```

##### `reset_is_auto_purged` <a name="reset_is_auto_purged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged"></a>

```python
def reset_is_auto_purged() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_is_fixed` <a name="reset_is_fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed"></a>

```python
def reset_is_fixed() -> None
```

##### `reset_is_never_executed` <a name="reset_is_never_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted"></a>

```python
def reset_is_never_executed() -> None
```

##### `reset_is_reproduced` <a name="reset_is_reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced"></a>

```python
def reset_is_reproduced() -> None
```

##### `reset_limit` <a name="reset_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

##### `reset_origin` <a name="reset_origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_plan_name` <a name="reset_plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName"></a>

```python
def reset_plan_name() -> None
```

##### `reset_sql_handle` <a name="reset_sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle"></a>

```python
def reset_sql_handle() -> None
```

##### `reset_sql_text` <a name="reset_sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText"></a>

```python
def reset_sql_text() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection">sql_plan_baseline_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput">is_accepted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput">is_adaptive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput">is_auto_purged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput">is_fixed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput">is_never_executed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput">is_reproduced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput">origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput">plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput">sql_handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput">sql_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted">is_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive">is_adaptive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged">is_auto_purged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed">is_fixed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted">is_never_executed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced">is_reproduced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName">plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle">sql_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a>

---

##### `sql_plan_baseline_collection`<sup>Required</sup> <a name="sql_plan_baseline_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection"></a>

```python
sql_plan_baseline_collection: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_accepted_input`<sup>Optional</sup> <a name="is_accepted_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput"></a>

```python
is_accepted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_adaptive_input`<sup>Optional</sup> <a name="is_adaptive_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput"></a>

```python
is_adaptive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_purged_input`<sup>Optional</sup> <a name="is_auto_purged_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput"></a>

```python
is_auto_purged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_fixed_input`<sup>Optional</sup> <a name="is_fixed_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput"></a>

```python
is_fixed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_never_executed_input`<sup>Optional</sup> <a name="is_never_executed_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput"></a>

```python
is_never_executed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_reproduced_input`<sup>Optional</sup> <a name="is_reproduced_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput"></a>

```python
is_reproduced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput"></a>

```python
origin_input: str
```

- *Type:* str

---

##### `plan_name_input`<sup>Optional</sup> <a name="plan_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput"></a>

```python
plan_name_input: str
```

- *Type:* str

---

##### `sql_handle_input`<sup>Optional</sup> <a name="sql_handle_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput"></a>

```python
sql_handle_input: str
```

- *Type:* str

---

##### `sql_text_input`<sup>Optional</sup> <a name="sql_text_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput"></a>

```python
sql_text_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_accepted`<sup>Required</sup> <a name="is_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted"></a>

```python
is_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_adaptive`<sup>Required</sup> <a name="is_adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive"></a>

```python
is_adaptive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_purged`<sup>Required</sup> <a name="is_auto_purged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged"></a>

```python
is_auto_purged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_fixed`<sup>Required</sup> <a name="is_fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed"></a>

```python
is_fixed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_never_executed`<sup>Required</sup> <a name="is_never_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted"></a>

```python
is_never_executed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_reproduced`<sup>Required</sup> <a name="is_reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced"></a>

```python
is_reproduced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

---

##### `sql_handle`<sup>Required</sup> <a name="sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle"></a>

```python
sql_handle: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]] = None,
  id: str = None,
  is_accepted: typing.Union[bool, IResolvable] = None,
  is_adaptive: typing.Union[bool, IResolvable] = None,
  is_auto_purged: typing.Union[bool, IResolvable] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  is_fixed: typing.Union[bool, IResolvable] = None,
  is_never_executed: typing.Union[bool, IResolvable] = None,
  is_reproduced: typing.Union[bool, IResolvable] = None,
  limit: typing.Union[int, float] = None,
  opc_named_credential_id: str = None,
  origin: str = None,
  plan_name: str = None,
  sql_handle: str = None,
  sql_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted">is_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive">is_adaptive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged">is_auto_purged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed">is_fixed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted">is_never_executed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced">is_reproduced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin">origin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName">plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle">sql_handle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText">sql_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_accepted`<sup>Optional</sup> <a name="is_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted"></a>

```python
is_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}.

---

##### `is_adaptive`<sup>Optional</sup> <a name="is_adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive"></a>

```python
is_adaptive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}.

---

##### `is_auto_purged`<sup>Optional</sup> <a name="is_auto_purged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged"></a>

```python
is_auto_purged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}.

---

##### `is_fixed`<sup>Optional</sup> <a name="is_fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed"></a>

```python
is_fixed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}.

---

##### `is_never_executed`<sup>Optional</sup> <a name="is_never_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted"></a>

```python
is_never_executed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}.

---

##### `is_reproduced`<sup>Optional</sup> <a name="is_reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced"></a>

```python
is_reproduced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin"></a>

```python
origin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}.

---

##### `plan_name`<sup>Optional</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}.

---

##### `sql_handle`<sup>Optional</sup> <a name="sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle"></a>

```python
sql_handle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}.

---

##### `sql_text`<sup>Optional</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection()
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted">accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive">adaptive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge">auto_purge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled">enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan">execution_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed">fixed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module">module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName">plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced">reproduced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle">sql_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted">time_last_executed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified">time_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepted`<sup>Required</sup> <a name="accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted"></a>

```python
accepted: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `adaptive`<sup>Required</sup> <a name="adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive"></a>

```python
adaptive: str
```

- *Type:* str

---

##### `auto_purge`<sup>Required</sup> <a name="auto_purge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge"></a>

```python
auto_purge: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled"></a>

```python
enabled: str
```

- *Type:* str

---

##### `execution_plan`<sup>Required</sup> <a name="execution_plan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan"></a>

```python
execution_plan: str
```

- *Type:* str

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed"></a>

```python
fixed: str
```

- *Type:* str

---

##### `module`<sup>Required</sup> <a name="module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module"></a>

```python
module: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

---

##### `reproduced`<sup>Required</sup> <a name="reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced"></a>

```python
reproduced: str
```

- *Type:* str

---

##### `sql_handle`<sup>Required</sup> <a name="sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle"></a>

```python
sql_handle: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_executed`<sup>Required</sup> <a name="time_last_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted"></a>

```python
time_last_executed: str
```

- *Type:* str

---

##### `time_last_modified`<sup>Required</sup> <a name="time_last_modified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified"></a>

```python
time_last_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baselines

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a>

---



