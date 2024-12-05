# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding oci_database_management_managed_database_sql_tuning_advisor_tasks_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedDatabaseId(java.lang.String)
    .sqlTuningAdvisorTaskId(java.lang.String)
//  .beginExecId(java.lang.String)
//  .endExecId(java.lang.String)
//  .findingFilter(java.lang.String)
//  .id(java.lang.String)
//  .indexHashFilter(java.lang.String)
//  .searchPeriod(java.lang.String)
//  .statsHashFilter(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.beginExecId">beginExecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.endExecId">endExecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.findingFilter">findingFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.indexHashFilter">indexHashFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.searchPeriod">searchPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.statsHashFilter">statsHashFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}.

---

##### `beginExecId`<sup>Optional</sup> <a name="beginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.beginExecId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}.

---

##### `endExecId`<sup>Optional</sup> <a name="endExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.endExecId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}.

---

##### `findingFilter`<sup>Optional</sup> <a name="findingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.findingFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexHashFilter`<sup>Optional</sup> <a name="indexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.indexHashFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}.

---

##### `searchPeriod`<sup>Optional</sup> <a name="searchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.searchPeriod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}.

---

##### `statsHashFilter`<sup>Optional</sup> <a name="statsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.statsHashFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId">resetBeginExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId">resetEndExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter">resetFindingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter">resetIndexHashFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod">resetSearchPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter">resetStatsHashFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBeginExecId` <a name="resetBeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId"></a>

```java
public void resetBeginExecId()
```

##### `resetEndExecId` <a name="resetEndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId"></a>

```java
public void resetEndExecId()
```

##### `resetFindingFilter` <a name="resetFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter"></a>

```java
public void resetFindingFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId"></a>

```java
public void resetId()
```

##### `resetIndexHashFilter` <a name="resetIndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter"></a>

```java
public void resetIndexHashFilter()
```

##### `resetSearchPeriod` <a name="resetSearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod"></a>

```java
public void resetSearchPeriod()
```

##### `resetStatsHashFilter` <a name="resetStatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter"></a>

```java
public void resetStatsHashFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput">beginExecIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput">endExecIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput">findingFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput">indexHashFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput">searchPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput">sqlTuningAdvisorTaskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput">statsHashFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId">beginExecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId">endExecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter">findingFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter">indexHashFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod">searchPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter">statsHashFilter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a>

---

##### `beginExecIdInput`<sup>Optional</sup> <a name="beginExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput"></a>

```java
public java.lang.String getBeginExecIdInput();
```

- *Type:* java.lang.String

---

##### `endExecIdInput`<sup>Optional</sup> <a name="endExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput"></a>

```java
public java.lang.String getEndExecIdInput();
```

- *Type:* java.lang.String

---

##### `findingFilterInput`<sup>Optional</sup> <a name="findingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput"></a>

```java
public java.lang.String getFindingFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexHashFilterInput`<sup>Optional</sup> <a name="indexHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput"></a>

```java
public java.lang.String getIndexHashFilterInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `searchPeriodInput`<sup>Optional</sup> <a name="searchPeriodInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput"></a>

```java
public java.lang.String getSearchPeriodInput();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="sqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskIdInput();
```

- *Type:* java.lang.String

---

##### `statsHashFilterInput`<sup>Optional</sup> <a name="statsHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput"></a>

```java
public java.lang.String getStatsHashFilterInput();
```

- *Type:* java.lang.String

---

##### `beginExecId`<sup>Required</sup> <a name="beginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId"></a>

```java
public java.lang.String getBeginExecId();
```

- *Type:* java.lang.String

---

##### `endExecId`<sup>Required</sup> <a name="endExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId"></a>

```java
public java.lang.String getEndExecId();
```

- *Type:* java.lang.String

---

##### `findingFilter`<sup>Required</sup> <a name="findingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter"></a>

```java
public java.lang.String getFindingFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexHashFilter`<sup>Required</sup> <a name="indexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter"></a>

```java
public java.lang.String getIndexHashFilter();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `searchPeriod`<sup>Required</sup> <a name="searchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod"></a>

```java
public java.lang.String getSearchPeriod();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

##### `statsHashFilter`<sup>Required</sup> <a name="statsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter"></a>

```java
public java.lang.String getStatsHashFilter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedDatabaseId(java.lang.String)
    .sqlTuningAdvisorTaskId(java.lang.String)
//  .beginExecId(java.lang.String)
//  .endExecId(java.lang.String)
//  .findingFilter(java.lang.String)
//  .id(java.lang.String)
//  .indexHashFilter(java.lang.String)
//  .searchPeriod(java.lang.String)
//  .statsHashFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId">beginExecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId">endExecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter">findingFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter">indexHashFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod">searchPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter">statsHashFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}.

---

##### `beginExecId`<sup>Optional</sup> <a name="beginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId"></a>

```java
public java.lang.String getBeginExecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}.

---

##### `endExecId`<sup>Optional</sup> <a name="endExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId"></a>

```java
public java.lang.String getEndExecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}.

---

##### `findingFilter`<sup>Optional</sup> <a name="findingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter"></a>

```java
public java.lang.String getFindingFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexHashFilter`<sup>Optional</sup> <a name="indexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter"></a>

```java
public java.lang.String getIndexHashFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}.

---

##### `searchPeriod`<sup>Optional</sup> <a name="searchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod"></a>

```java
public java.lang.String getSearchPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}.

---

##### `statsHashFilter`<sup>Optional</sup> <a name="statsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter"></a>

```java
public java.lang.String getStatsHashFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_finding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit">dbTimeBenefit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent">isAlternativePlanFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent">isErrorFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent">isIndexFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent">isMiscellaneousFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent">isRestructureSqlFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented">isSqlProfileFindingImplemented</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent">isSqlProfileFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent">isStatsFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent">isTimeoutFindingPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema">parsingSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage">perExecutionPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey">sqlKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText">sqlText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId">sqlTuningAdvisorTaskObjectExecutionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sqlTuningAdvisorTaskObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbTimeBenefit`<sup>Required</sup> <a name="dbTimeBenefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit"></a>

```java
public java.lang.Number getDbTimeBenefit();
```

- *Type:* java.lang.Number

---

##### `isAlternativePlanFindingPresent`<sup>Required</sup> <a name="isAlternativePlanFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent"></a>

```java
public IResolvable getIsAlternativePlanFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isErrorFindingPresent`<sup>Required</sup> <a name="isErrorFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent"></a>

```java
public IResolvable getIsErrorFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIndexFindingPresent`<sup>Required</sup> <a name="isIndexFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent"></a>

```java
public IResolvable getIsIndexFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMiscellaneousFindingPresent`<sup>Required</sup> <a name="isMiscellaneousFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent"></a>

```java
public IResolvable getIsMiscellaneousFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRestructureSqlFindingPresent`<sup>Required</sup> <a name="isRestructureSqlFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent"></a>

```java
public IResolvable getIsRestructureSqlFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSqlProfileFindingImplemented`<sup>Required</sup> <a name="isSqlProfileFindingImplemented" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented"></a>

```java
public IResolvable getIsSqlProfileFindingImplemented();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSqlProfileFindingPresent`<sup>Required</sup> <a name="isSqlProfileFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent"></a>

```java
public IResolvable getIsSqlProfileFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isStatsFindingPresent`<sup>Required</sup> <a name="isStatsFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent"></a>

```java
public IResolvable getIsStatsFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTimeoutFindingPresent`<sup>Required</sup> <a name="isTimeoutFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent"></a>

```java
public IResolvable getIsTimeoutFindingPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `parsingSchema`<sup>Required</sup> <a name="parsingSchema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema"></a>

```java
public java.lang.String getParsingSchema();
```

- *Type:* java.lang.String

---

##### `perExecutionPercentage`<sup>Required</sup> <a name="perExecutionPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage"></a>

```java
public java.lang.Number getPerExecutionPercentage();
```

- *Type:* java.lang.Number

---

##### `sqlKey`<sup>Required</sup> <a name="sqlKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey"></a>

```java
public java.lang.String getSqlKey();
```

- *Type:* java.lang.String

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText"></a>

```java
public java.lang.String getSqlText();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskObjectExecutionId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskObjectExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskObjectExecutionId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskObjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a>

---



