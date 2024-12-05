# `dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCounts <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts oci_database_management_managed_database_alert_log_counts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter>)
//  .groupBy(java.lang.String)
//  .id(java.lang.String)
//  .isRegularExpression(java.lang.Boolean)
//  .isRegularExpression(IResolvable)
//  .levelFilter(java.lang.String)
//  .logSearchText(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
//  .typeFilter(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.isRegularExpression">isRegularExpression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.levelFilter">levelFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.logSearchText">logSearchText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.typeFilter">typeFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.groupBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegularExpression`<sup>Optional</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.isRegularExpression"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `levelFilter`<sup>Optional</sup> <a name="levelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.levelFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `logSearchText`<sup>Optional</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.logSearchText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `typeFilter`<sup>Optional</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.typeFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression">resetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter">resetLevelFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText">resetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter">resetTypeFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId"></a>

```java
public void resetId()
```

##### `resetIsRegularExpression` <a name="resetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression"></a>

```java
public void resetIsRegularExpression()
```

##### `resetLevelFilter` <a name="resetLevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter"></a>

```java
public void resetLevelFilter()
```

##### `resetLogSearchText` <a name="resetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText"></a>

```java
public void resetLogSearchText()
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo"></a>

```java
public void resetTimeGreaterThanOrEqualTo()
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo"></a>

```java
public void resetTimeLessThanOrEqualTo()
```

##### `resetTypeFilter` <a name="resetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter"></a>

```java
public void resetTypeFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts;

DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection">alertLogCountsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput">groupByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput">isRegularExpressionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput">levelFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput">logSearchTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput">typeFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression">isRegularExpression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter">levelFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText">logSearchText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter">typeFilter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alertLogCountsCollection`<sup>Required</sup> <a name="alertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList getAlertLogCountsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput"></a>

```java
public java.lang.String getGroupByInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isRegularExpressionInput`<sup>Optional</sup> <a name="isRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput"></a>

```java
public java.lang.Object getIsRegularExpressionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `levelFilterInput`<sup>Optional</sup> <a name="levelFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput"></a>

```java
public java.lang.String getLevelFilterInput();
```

- *Type:* java.lang.String

---

##### `logSearchTextInput`<sup>Optional</sup> <a name="logSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput"></a>

```java
public java.lang.String getLogSearchTextInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput"></a>

```java
public java.lang.String getTimeLessThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `typeFilterInput`<sup>Optional</sup> <a name="typeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput"></a>

```java
public java.lang.String getTypeFilterInput();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRegularExpression`<sup>Required</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression"></a>

```java
public java.lang.Object getIsRegularExpression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `levelFilter`<sup>Required</sup> <a name="levelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter"></a>

```java
public java.lang.String getLevelFilter();
```

- *Type:* java.lang.String

---

##### `logSearchText`<sup>Required</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText"></a>

```java
public java.lang.String getLogSearchText();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `typeFilter`<sup>Required</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter"></a>

```java
public java.lang.String getTypeFilter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection;

DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems;

DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig;

DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.builder()
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
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter>)
//  .groupBy(java.lang.String)
//  .id(java.lang.String)
//  .isRegularExpression(java.lang.Boolean)
//  .isRegularExpression(IResolvable)
//  .levelFilter(java.lang.String)
//  .logSearchText(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
//  .typeFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression">isRegularExpression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter">levelFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText">logSearchText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter">typeFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegularExpression`<sup>Optional</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression"></a>

```java
public java.lang.Object getIsRegularExpression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `levelFilter`<sup>Optional</sup> <a name="levelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter"></a>

```java
public java.lang.String getLevelFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `logSearchText`<sup>Optional</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText"></a>

```java
public java.lang.String getLogSearchText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `typeFilter`<sup>Optional</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter"></a>

```java
public java.lang.String getTypeFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter;

DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_alert_log_counts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference;

new DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>

---



