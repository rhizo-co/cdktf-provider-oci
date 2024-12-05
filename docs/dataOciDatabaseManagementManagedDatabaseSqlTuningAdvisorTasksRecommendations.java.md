# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Builder.create(Construct scope, java.lang.String id)
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
    .executionId(java.lang.String)
    .managedDatabaseId(java.lang.String)
    .sqlObjectId(java.lang.String)
    .sqlTuningAdvisorTaskId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter>)
//  .id(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.executionId">executionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.executionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}.

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlObjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetId"></a>

```java
public void resetId()
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.resetOpcNamedCredentialId"></a>

```java
public void resetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskRecommendationCollection">sqlTuningAdvisorTaskRecommendationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionIdInput">executionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectIdInput">sqlObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskIdInput">sqlTuningAdvisorTaskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionId">executionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filter"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList</a>

---

##### `sqlTuningAdvisorTaskRecommendationCollection`<sup>Required</sup> <a name="sqlTuningAdvisorTaskRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskRecommendationCollection"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList getSqlTuningAdvisorTaskRecommendationCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList</a>

---

##### `executionIdInput`<sup>Optional</sup> <a name="executionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionIdInput"></a>

```java
public java.lang.String getExecutionIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialIdInput"></a>

```java
public java.lang.String getOpcNamedCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `sqlObjectIdInput`<sup>Optional</sup> <a name="sqlObjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectIdInput"></a>

```java
public java.lang.String getSqlObjectIdInput();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="sqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskIdInput"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskIdInput();
```

- *Type:* java.lang.String

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlObjectId"></a>

```java
public java.lang.String getSqlObjectId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.builder()
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
    .executionId(java.lang.String)
    .managedDatabaseId(java.lang.String)
    .sqlObjectId(java.lang.String)
    .sqlTuningAdvisorTaskId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter>)
//  .id(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.executionId">executionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#execution_id}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#managed_database_id}.

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlObjectId"></a>

```java
public java.lang.String getSqlObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_object_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#sql_tuning_advisor_task_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsConfig.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendations#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.benefit">benefit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.finding">finding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.implementActionSql">implementActionSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.isParallelExecution">isParallelExecution</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.rationale">rationale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationKey">recommendationKey</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationType">recommendationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sqlTuningAdvisorTaskObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `benefit`<sup>Required</sup> <a name="benefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.benefit"></a>

```java
public java.lang.Number getBenefit();
```

- *Type:* java.lang.Number

---

##### `finding`<sup>Required</sup> <a name="finding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.finding"></a>

```java
public java.lang.String getFinding();
```

- *Type:* java.lang.String

---

##### `implementActionSql`<sup>Required</sup> <a name="implementActionSql" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.implementActionSql"></a>

```java
public java.lang.String getImplementActionSql();
```

- *Type:* java.lang.String

---

##### `isParallelExecution`<sup>Required</sup> <a name="isParallelExecution" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.isParallelExecution"></a>

```java
public IResolvable getIsParallelExecution();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rationale`<sup>Required</sup> <a name="rationale" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.rationale"></a>

```java
public java.lang.String getRationale();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `recommendationKey`<sup>Required</sup> <a name="recommendationKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationKey"></a>

```java
public java.lang.Number getRecommendationKey();
```

- *Type:* java.lang.Number

---

##### `recommendationType`<sup>Required</sup> <a name="recommendationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.recommendationType"></a>

```java
public java.lang.String getRecommendationType();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskObjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendations.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationsSqlTuningAdvisorTaskRecommendationCollection</a>

---



