# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks oci_database_management_managed_database_sql_tuning_advisor_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
//  .status(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName"></a>

```java
public void resetName()
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId"></a>

```java
public void resetOpcNamedCredentialId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo"></a>

```java
public void resetTimeGreaterThanOrEqualTo()
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo"></a>

```java
public void resetTimeLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection">sqlTuningAdvisorTaskCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a>

---

##### `sqlTuningAdvisorTaskCollection`<sup>Required</sup> <a name="sqlTuningAdvisorTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList getSqlTuningAdvisorTaskCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput"></a>

```java
public java.lang.String getOpcNamedCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput"></a>

```java
public java.lang.String getTimeLessThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
//  .status(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems;

DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire">daysToExpire</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount">recommendationCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus">taskStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded">timeExecutionEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted">timeExecutionStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements">totalSqlStatements</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysToExpire`<sup>Required</sup> <a name="daysToExpire" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire"></a>

```java
public java.lang.Number getDaysToExpire();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId"></a>

```java
public java.lang.Number getInstanceId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `recommendationCount`<sup>Required</sup> <a name="recommendationCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount"></a>

```java
public java.lang.Number getRecommendationCount();
```

- *Type:* java.lang.Number

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```java
public java.lang.String getSqlTuningAdvisorTaskId();
```

- *Type:* java.lang.String

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus"></a>

```java
public java.lang.String getTaskStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeExecutionEnded`<sup>Required</sup> <a name="timeExecutionEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded"></a>

```java
public java.lang.String getTimeExecutionEnded();
```

- *Type:* java.lang.String

---

##### `timeExecutionStarted`<sup>Required</sup> <a name="timeExecutionStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted"></a>

```java
public java.lang.String getTimeExecutionStarted();
```

- *Type:* java.lang.String

---

##### `totalSqlStatements`<sup>Required</sup> <a name="totalSqlStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements"></a>

```java
public java.lang.Number getTotalSqlStatements();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_sql_tuning_advisor_tasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference;

new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a>

---



