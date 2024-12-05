# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings oci_database_management_managed_database_sql_tuning_advisor_tasks_findings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings(
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
  sql_tuning_advisor_task_id: str,
  begin_exec_id: str = None,
  end_exec_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]] = None,
  finding_filter: str = None,
  id: str = None,
  index_hash_filter: str = None,
  opc_named_credential_id: str = None,
  search_period: str = None,
  stats_hash_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.beginExecId">begin_exec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.endExecId">end_exec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.findingFilter">finding_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.indexHashFilter">index_hash_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.searchPeriod">search_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.statsHashFilter">stats_hash_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}.

---

##### `begin_exec_id`<sup>Optional</sup> <a name="begin_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.beginExecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}.

---

##### `end_exec_id`<sup>Optional</sup> <a name="end_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.endExecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#filter}

---

##### `finding_filter`<sup>Optional</sup> <a name="finding_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.findingFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_hash_filter`<sup>Optional</sup> <a name="index_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.indexHashFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}.

---

##### `search_period`<sup>Optional</sup> <a name="search_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.searchPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}.

---

##### `stats_hash_filter`<sup>Optional</sup> <a name="stats_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.statsHashFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetBeginExecId">reset_begin_exec_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetEndExecId">reset_end_exec_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFindingFilter">reset_finding_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetIndexHashFilter">reset_index_hash_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetSearchPeriod">reset_search_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetStatsHashFilter">reset_stats_hash_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]

---

##### `reset_begin_exec_id` <a name="reset_begin_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetBeginExecId"></a>

```python
def reset_begin_exec_id() -> None
```

##### `reset_end_exec_id` <a name="reset_end_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetEndExecId"></a>

```python
def reset_end_exec_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_finding_filter` <a name="reset_finding_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFindingFilter"></a>

```python
def reset_finding_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_hash_filter` <a name="reset_index_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetIndexHashFilter"></a>

```python
def reset_index_hash_filter() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

##### `reset_search_period` <a name="reset_search_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetSearchPeriod"></a>

```python
def reset_search_period() -> None
```

##### `reset_stats_hash_filter` <a name="reset_stats_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetStatsHashFilter"></a>

```python
def reset_stats_hash_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskFindingCollection">sql_tuning_advisor_task_finding_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecIdInput">begin_exec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecIdInput">end_exec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilterInput">finding_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilterInput">index_hash_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriodInput">search_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskIdInput">sql_tuning_advisor_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilterInput">stats_hash_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecId">begin_exec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecId">end_exec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilter">finding_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilter">index_hash_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriod">search_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilter">stats_hash_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList</a>

---

##### `sql_tuning_advisor_task_finding_collection`<sup>Required</sup> <a name="sql_tuning_advisor_task_finding_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskFindingCollection"></a>

```python
sql_tuning_advisor_task_finding_collection: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList</a>

---

##### `begin_exec_id_input`<sup>Optional</sup> <a name="begin_exec_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecIdInput"></a>

```python
begin_exec_id_input: str
```

- *Type:* str

---

##### `end_exec_id_input`<sup>Optional</sup> <a name="end_exec_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecIdInput"></a>

```python
end_exec_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]

---

##### `finding_filter_input`<sup>Optional</sup> <a name="finding_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilterInput"></a>

```python
finding_filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_hash_filter_input`<sup>Optional</sup> <a name="index_hash_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilterInput"></a>

```python
index_hash_filter_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `search_period_input`<sup>Optional</sup> <a name="search_period_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriodInput"></a>

```python
search_period_input: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id_input`<sup>Optional</sup> <a name="sql_tuning_advisor_task_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskIdInput"></a>

```python
sql_tuning_advisor_task_id_input: str
```

- *Type:* str

---

##### `stats_hash_filter_input`<sup>Optional</sup> <a name="stats_hash_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilterInput"></a>

```python
stats_hash_filter_input: str
```

- *Type:* str

---

##### `begin_exec_id`<sup>Required</sup> <a name="begin_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecId"></a>

```python
begin_exec_id: str
```

- *Type:* str

---

##### `end_exec_id`<sup>Required</sup> <a name="end_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecId"></a>

```python
end_exec_id: str
```

- *Type:* str

---

##### `finding_filter`<sup>Required</sup> <a name="finding_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilter"></a>

```python
finding_filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_hash_filter`<sup>Required</sup> <a name="index_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilter"></a>

```python
index_hash_filter: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `search_period`<sup>Required</sup> <a name="search_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriod"></a>

```python
search_period: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

##### `stats_hash_filter`<sup>Required</sup> <a name="stats_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilter"></a>

```python
stats_hash_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  sql_tuning_advisor_task_id: str,
  begin_exec_id: str = None,
  end_exec_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]] = None,
  finding_filter: str = None,
  id: str = None,
  index_hash_filter: str = None,
  opc_named_credential_id: str = None,
  search_period: str = None,
  stats_hash_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.beginExecId">begin_exec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.endExecId">end_exec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.findingFilter">finding_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.indexHashFilter">index_hash_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.searchPeriod">search_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.statsHashFilter">stats_hash_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}.

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}.

---

##### `begin_exec_id`<sup>Optional</sup> <a name="begin_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.beginExecId"></a>

```python
begin_exec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}.

---

##### `end_exec_id`<sup>Optional</sup> <a name="end_exec_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.endExecId"></a>

```python
end_exec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#filter}

---

##### `finding_filter`<sup>Optional</sup> <a name="finding_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.findingFilter"></a>

```python
finding_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_hash_filter`<sup>Optional</sup> <a name="index_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.indexHashFilter"></a>

```python
index_hash_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}.

---

##### `search_period`<sup>Optional</sup> <a name="search_period" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.searchPeriod"></a>

```python
search_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}.

---

##### `stats_hash_filter`<sup>Optional</sup> <a name="stats_hash_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.statsHashFilter"></a>

```python
stats_hash_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection()
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.dbTimeBenefit">db_time_benefit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isAlternativePlanFindingPresent">is_alternative_plan_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isErrorFindingPresent">is_error_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isIndexFindingPresent">is_index_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isMiscellaneousFindingPresent">is_miscellaneous_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isRestructureSqlFindingPresent">is_restructure_sql_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingImplemented">is_sql_profile_finding_implemented</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingPresent">is_sql_profile_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isStatsFindingPresent">is_stats_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isTimeoutFindingPresent">is_timeout_finding_present</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.parsingSchema">parsing_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.perExecutionPercentage">per_execution_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlKey">sql_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sql_tuning_advisor_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId">sql_tuning_advisor_task_object_execution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sql_tuning_advisor_task_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_time_benefit`<sup>Required</sup> <a name="db_time_benefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.dbTimeBenefit"></a>

```python
db_time_benefit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_alternative_plan_finding_present`<sup>Required</sup> <a name="is_alternative_plan_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isAlternativePlanFindingPresent"></a>

```python
is_alternative_plan_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_error_finding_present`<sup>Required</sup> <a name="is_error_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isErrorFindingPresent"></a>

```python
is_error_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_index_finding_present`<sup>Required</sup> <a name="is_index_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isIndexFindingPresent"></a>

```python
is_index_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_miscellaneous_finding_present`<sup>Required</sup> <a name="is_miscellaneous_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isMiscellaneousFindingPresent"></a>

```python
is_miscellaneous_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restructure_sql_finding_present`<sup>Required</sup> <a name="is_restructure_sql_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isRestructureSqlFindingPresent"></a>

```python
is_restructure_sql_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sql_profile_finding_implemented`<sup>Required</sup> <a name="is_sql_profile_finding_implemented" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingImplemented"></a>

```python
is_sql_profile_finding_implemented: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sql_profile_finding_present`<sup>Required</sup> <a name="is_sql_profile_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingPresent"></a>

```python
is_sql_profile_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_stats_finding_present`<sup>Required</sup> <a name="is_stats_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isStatsFindingPresent"></a>

```python
is_stats_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_timeout_finding_present`<sup>Required</sup> <a name="is_timeout_finding_present" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isTimeoutFindingPresent"></a>

```python
is_timeout_finding_present: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `parsing_schema`<sup>Required</sup> <a name="parsing_schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.parsingSchema"></a>

```python
parsing_schema: str
```

- *Type:* str

---

##### `per_execution_percentage`<sup>Required</sup> <a name="per_execution_percentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.perExecutionPercentage"></a>

```python
per_execution_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_key`<sup>Required</sup> <a name="sql_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlKey"></a>

```python
sql_key: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```python
sql_tuning_advisor_task_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_object_execution_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_object_execution_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId"></a>

```python
sql_tuning_advisor_task_object_execution_id: str
```

- *Type:* str

---

##### `sql_tuning_advisor_task_object_id`<sup>Required</sup> <a name="sql_tuning_advisor_task_object_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```python
sql_tuning_advisor_task_object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_tuning_advisor_tasks_findings

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection</a>

---



