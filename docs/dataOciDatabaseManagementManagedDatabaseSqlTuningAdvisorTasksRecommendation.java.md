# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.executionId">executionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.executionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}.

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlObjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.sqlTuningAdvisorTaskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionIdInput">executionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectIdInput">sqlObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskIdInput">sqlTuningAdvisorTaskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionId">executionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList</a>

---

##### `executionIdInput`<sup>Optional</sup> <a name="executionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionIdInput"></a>

```java
public java.lang.String getExecutionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `sqlObjectIdInput`<sup>Optional</sup> <a name="sqlObjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectIdInput"></a>

```java
public java.lang.String getSqlObjectIdInput();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="sqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskIdInput"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskIdInput();
```

- *Type:* java.lang.String

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlObjectId"></a>

```java
public java.lang.String getSqlObjectId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.executionId">executionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlObjectId">sqlObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#execution_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#execution_id}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#managed_database_id}.

---

##### `sqlObjectId`<sup>Required</sup> <a name="sqlObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlObjectId"></a>

```java
public java.lang.String getSqlObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_object_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_object_id}.

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#sql_tuning_advisor_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_recommendation#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks_recommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.benefit">benefit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.finding">finding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.implementActionSql">implementActionSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.isParallelExecution">isParallelExecution</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.rationale">rationale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationKey">recommendationKey</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationType">recommendationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">sqlTuningAdvisorTaskObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `benefit`<sup>Required</sup> <a name="benefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.benefit"></a>

```java
public java.lang.Number getBenefit();
```

- *Type:* java.lang.Number

---

##### `finding`<sup>Required</sup> <a name="finding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.finding"></a>

```java
public java.lang.String getFinding();
```

- *Type:* java.lang.String

---

##### `implementActionSql`<sup>Required</sup> <a name="implementActionSql" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.implementActionSql"></a>

```java
public java.lang.String getImplementActionSql();
```

- *Type:* java.lang.String

---

##### `isParallelExecution`<sup>Required</sup> <a name="isParallelExecution" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.isParallelExecution"></a>

```java
public IResolvable getIsParallelExecution();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rationale`<sup>Required</sup> <a name="rationale" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.rationale"></a>

```java
public java.lang.String getRationale();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `recommendationKey`<sup>Required</sup> <a name="recommendationKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationKey"></a>

```java
public java.lang.Number getRecommendationKey();
```

- *Type:* java.lang.Number

---

##### `recommendationType`<sup>Required</sup> <a name="recommendationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.recommendationType"></a>

```java
public java.lang.String getRecommendationType();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

##### `sqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskObjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendation.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksRecommendationItems</a>

---



